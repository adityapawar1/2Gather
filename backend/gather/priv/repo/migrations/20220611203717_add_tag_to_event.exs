defmodule Gather.Repo.Migrations.AddTagToEvent do
  use Ecto.Migration

  def change do
    alter table("events") do
      add :tags, {:array, :string}
    end
  end
end
