defmodule GatherWeb.EventChatController do
  use GatherWeb, :controller
  import Ecto.Query
  alias Gather.{Repo, Event, User}

   # get all past messages then use channels for live messaging
  def past_messages(%{assigns: %{id: user_id}} = conn, %{"event_id" => event_id}) do
    user = Repo.one(from u in User, where: u.id == ^user_id)
    %Event{participants: event_participants, chat: messages} = Repo.one(from e in Event, where: e.id == ^event_id)

    if user.id in event_participants do
      json(conn, %{messages: messages})
    else
      json(conn, %{error: "You need to register to view messages for the event"})
    end
  end
end
