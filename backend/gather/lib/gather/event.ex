defmodule Gather.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :description, :string
    field :location, :map
    field :organizer, :integer
    field :participants, :integer
    field :time, :map
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:title, :location, :organizer, :description, :time, :participants])
    |> validate_required([:title, :location, :organizer, :description, :time, :participants])
  end
end
