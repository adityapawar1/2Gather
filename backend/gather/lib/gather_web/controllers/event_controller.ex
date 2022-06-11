defmodule GatherWeb.EventController do
  use GatherWeb, :controller
  import Ecto.Query
  alias Gather.{Repo, Event, User}

  def index(conn, _params) do
    events = Repo.all(Event)
    json(conn, %{events: events})
  end

  def create(%{assigns: %{id: organizer_id}} = conn, %{"title" => title, "tags" => tags, "description" => description, "location" => location = %{"lat" => _, "lng" => _}, "time" => time = %{"start" => _, "end" => _}}) do
    event =
      %Event{}
      |> Event.changeset(%{
        title: title,
        tags: lowercase_tags(tags),
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
    json(conn, %{event: event |> add_organizer_email})
  end

  def contains_any_tag(conn, %{"tags" => tags}) do
    tags = lowercase_tags(tags)
    events = Repo.all(Event)

    tagged_events = Enum.filter(events, fn event -> common_element(event.tags, tags) end)
    json(conn, %{events: tagged_events |> add_organizer_email})
  end

  def contains_all_tags(conn, %{"tags" => tags}) do
    tags = lowercase_tags(tags)
    events = Repo.all(Event)

    tagged_events = Enum.filter(events, fn event -> subset(tags, event.tags) end)
    json(conn, %{events: tagged_events |> add_organizer_email})
  end

  # Utility functions

  defp subset(small_list, large_list) do
    MapSet.subset?(MapSet.new(small_list), MapSet.new(large_list))
  end

  defp common_element(list1, list2) do
    Enum.any?(list1, fn el -> Enum.any?(list2, fn other -> el == other end) end)
  end

  defp lowercase_tags(tags) do
    Enum.map(tags, fn tag -> String.downcase(tag) end)
  end

  defp add_organizer_email(events) when is_list(events) do
    Enum.map(events, fn event -> add_organizer_email(event) end)
  end

  defp add_organizer_email(%Event{organizer: organizer_id} = event) do
    organizer_email = Repo.one(from u in User, where: u.id == ^organizer_id, select: u.email)
    %Event{event | organizer: organizer_email}
  end
end
