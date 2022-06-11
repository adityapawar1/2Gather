defmodule Gather.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :password, :string
      add :phone, :string
      add :email, :string
      add :tags, {:array, :string}

      timestamps()
    end
  end
end
