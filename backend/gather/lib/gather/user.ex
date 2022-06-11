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
  end
end
