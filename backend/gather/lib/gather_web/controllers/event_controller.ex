defmodule GatherWeb.EventController do
  use GatherWeb, :controller
  import Ecto.Query
  alias Gather.{Repo, Event}

  def index(conn, _params) do
    events = Repo.all(Event)
    json(conn, %{events: events})
  end

  def create(%{assigns: %{id: organizer_id}} = conn, %{"title" => title, "tags" => tags, "description" => description, "location" => location = %{"lat" => _, "lng" => _}, "time" => time = %{"start" => _, "end" => _}}) do
    event =
      %Event{}
      |> Event.changeset(%{
        title: title,
        tags: tags,
        description: description,
        organizer: organizer_id,
        location: Event.Location.new(location),
        time: Event.Time.new(time),
        participants: []
      })
    {status, output} = Repo.insert(event)

    reason =
      case output do
        %Event{title: _, description: _, location: _, time: _} -> "Created event successfully"
        %Ecto.Changeset{errors: errors} -> "Error creating event #{inspect(errors)}"
        _ -> "Unknown error"
      end

    json(conn, %{status => reason})
  end

  def create(conn, _params) do
    json(conn, %{"error" => "Fields missing or malformed"})
  end

  def show(conn, %{"id" => event_id}) do
    event = Repo.one(from e in Event, where: e.id == ^event_id)
    json(conn, %{event: event})
  end
end
