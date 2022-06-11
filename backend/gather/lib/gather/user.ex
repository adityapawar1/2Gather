defmodule Gather.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password, :string
    field :phone, :string
    field :tags, {:array, :string}

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :password, :phone, :email, :tags])
    |> validate_required([:name, :password, :phone, :email, :tags])
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:email)
  end

  defimpl Jason.Encoder, for: Gather.User do
    @spec encode(%Gather.User{}, Jason.Encode.opts()) ::
            binary
            | maybe_improper_list(
                binary | maybe_improper_list(any, binary | []) | byte,
                binary | []
              )
    def encode(%Gather.User{} = value, opts) do
      Jason.Encode.map(Map.take(value, [:name, :phone, :email, :tags]), opts)
    end
  end
end
