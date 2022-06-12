defmodule Gather.Repo.Migrations.AddChatToEvent do
  use Ecto.Migration

  def change do
    alter table("events") do
      add :chat, {:array, :map}
    end
  end
end
