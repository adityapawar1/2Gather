defmodule GatherWeb.Plugs.AuthPlug do
  @moduledoc """
    A plug for parsing JWT tokens from a request
  """
  import Plug.Conn

  def init(_) do
  end

  def call(conn, _opts) do
    token = get_req_header(conn, "jwt_token") |> List.first()
    token =
      case token do
        nil -> ""
        _ -> token
      end

    %{"id" => id} =
      case Gather.Signer.validate(token) do
        {:ok, %{"id" => _username} = claims} -> claims
        _ -> %{"id" => ""}
      end

    if id != "" do
      assign(conn, :id, id)
    else
      conn
      |> put_resp_header("Content-Type", "application/json; charset=utf-8")
      |> send_resp(400, Jason.encode!(%{error: "Not signed in"}))
      |> halt()
    end
  end
end
