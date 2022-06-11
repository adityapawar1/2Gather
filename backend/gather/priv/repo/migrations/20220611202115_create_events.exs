defmodule Gather.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :title, :string
      add :location, :map
      add :organizer, :integer
      add :description, :text
      add :time, :map
      add :participants, {:array, :integer}

      timestamps()
    end
  end
end
