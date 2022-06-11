defmodule :"Elixir.Gather.Repo.Migrations.DropEmail" do
  use Ecto.Migration

  def change do
    create unique_index(:users, [:email])
  end
end
