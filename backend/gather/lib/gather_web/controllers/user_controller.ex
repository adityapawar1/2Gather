defmodule GatherWeb.UserController do
  use GatherWeb, :controller
  import Ecto.Query
  alias Gather.{Repo, User}

  def signup(conn, %{"name" => name, "password" => password, "phone" => phone, "email" => email, "tags" => tags}) do
    hashed_password = Bcrypt.Base.hash_password(password, Bcrypt.Base.gen_salt(12, true))
    user = %User{} |> User.changeset(%{name: name, password: hashed_password, phone: phone, email: email, tags: lowercase_tags(tags)})
    {status, output} = Repo.insert(user)

    reason =
      case output do
        %User{name: _, password: _, phone: _, email: _, tags: _} -> "Created user successfully"
        %Ecto.Changeset{errors: _errors} -> "Email is already taken"
        _ -> "Unknown error"
      end

    json(conn, %{status => reason})
  end

  def signup(conn, _params) do
    json(conn, %{"error" => "Missing one or more required parameters"})
  end

  def profile(conn, %{"id" => id}) do
    user = Repo.one(from u in User, where: u.id == ^id)
    json(conn, %{profile: user})
  end

  def profile(%{assigns: %{id: id}} = conn, _params) do
    user = Repo.one(from u in User, where: u.id == ^id)
    json(conn, %{profile: user})
  end

  def signin(conn, %{"email" => email, "password" => password}) do
    user = Repo.one(from u in User, where: u.email == ^email)
    if user == nil do
      json(conn, %{"error" => "Invalid email or password"})
    else
      if Bcrypt.verify_pass(password, user.password) do
        token = Gather.Signer.generate_token(user.id)
        json(conn, %{token: token})
      else
        json(conn, %{"error" => "Invalid email or password"})
      end
    end
  end

  def signin(conn, _params) do
    json(conn, %{"error" => "Missing one or more required parameters"})
  end

  def edit_tags(%{assigns: %{id: id}} = conn, %{"tags" => tags}) do
    IO.puts("Editing #{id}'s tags")

    user = Repo.one(from u in User, where: u.id == ^id)
    user = user |> User.changeset(%{tags: tags})
    {status, output} = Repo.update(user)

    reason =
      case output do
        %User{name: _, password: _, phone: _, email: _, tags: _} -> "Updated user successfully"
        %Ecto.Changeset{errors: _errors} -> "Tags were not supplied correctly, talk to adi"
        _ -> "Unknown error"
      end
    json(conn, %{status => reason})
  end

  def edit_tags(conn, _params) do
    json(conn, %{"error" => "Missing one or more required parameters"})
  end

  defp lowercase_tags(tags) when is_list(tags) do
    Enum.map(tags, fn tag -> String.downcase(tag) end)
  end

  defp lowercase_tags(tags) when is_bitstring(tags) do
    Enum.map(tags |> String.split(","), fn tag -> String.downcase(tag) end)
  end
end
