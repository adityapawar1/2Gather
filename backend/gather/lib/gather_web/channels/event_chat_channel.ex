defmodule HelloWeb.EventChatChannel do
  use Phoenix.Channel

  import Ecto.Query
  alias Gather.{Repo, Event, User}

  def join("event:" <> event_id, %{"token" => token}, socket) do
    event_participants = Repo.one(from e in Event, where: e.id == ^event_id, select: e.participants)
    user = token_to_user(token)

    if not is_nil(user) and user.id in event_participants do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("new_msg", %{"message" => message, "user_id" => user_id}, %Phoenix.Socket{topic: "event:" <> event_id} = socket) do
    message = %Event.ChatMessage{sender: user_id, message: message}
    Gather.ChatDBManager.add_message(event_id, message)
    broadcast!(socket, "message", %{message: message})
    {:noreply, socket}
  end

  defp token_to_user(token) do
    case Gather.Signer.validate(token) do
      {:ok, %{"id" => id}} -> Repo.one(from u in User, where: u.id == ^id)
      {:error, _} -> nil
    end
  end
end
