defmodule Gather.ChatDBManager do
  @server :chatdbmanager
  alias Gather.{Repo, Event}
  import Ecto.Query
  use GenServer

  def add_message(event_id, %Event.ChatMessage{} = message) do
    GenServer.cast(@server, {:message, {event_id, message}})
  end

  def start_link(_) do
    GenServer.start_link(__MODULE__, %{}, name: @server)
  end

  @impl true
  def init(_) do
    {:ok, %{}}
  end

  @impl true
  def handle_cast({:message, {event_id, %Event.ChatMessage{} = message}}, _state) do
    update = from(e in Event, where: e.id == ^event_id, update: [push: [chat: ^message]])
    Repo.update_all(update, [])
    {:noreply, %{}}
  end
end
