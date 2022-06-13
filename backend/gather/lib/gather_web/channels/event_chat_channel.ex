defmodule GatherWeb.EventChatChannel do
  use Phoenix.Channel

  import Ecto.Query
  alias Gather.{Repo, Event, User}

  def join("event:" <> event_id, _params, socket) do
    {:ok, socket}
    # event_participants = Repo.one(from e in Event, where: e.id == ^event_id, select: e.participants)
    # user = token_to_user(token)

    # if not is_nil(user) and user.id in event_participants do
    #   {:ok, socket}
    # else
    #   {:error, %{reason: "unauthorized"}}
    # end
  end

  def handle_in("new_msg", %{"body" => message, "sender" => sender_name}, socket) do
    "event:" <> event_id = Map.get(socket, :topic, "")
    message = %Event.ChatMessage{sender: sender_name, message: message}
    Gather.ChatDBManager.add_message(event_id, message)
    broadcast!(socket, "new_msg", %{message: message})
    {:noreply, socket}
  end

  defp token_to_user(token) do
    case Gather.Signer.validate(token) do
      {:ok, %{"id" => id}} -> Repo.one(from u in User, where: u.id == ^id)
      {:error, _} -> nil
    end
  end
end
