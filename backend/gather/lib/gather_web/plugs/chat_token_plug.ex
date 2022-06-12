defmodule GatherWeb.Plugs.ChatTokenPlug do
  import Plug.Conn

  def init(_) do
  end

  def call(conn, _opts) do
    if id = conn.assigns[:id] do
      token = Phoenix.Token.sign(conn, "event_chat", id)
      assign(conn, :user_token, token)
    else
      conn
    end
  end
end
