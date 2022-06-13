defmodule GatherWeb.Plugs.AuthPlug do
  import Plug.Conn

  def init(_) do
  end

  def call(conn, _opts) do
    token = get_req_header(conn, "x-mx-reqtoken") |> List.first()
    IO.puts("Singing in with token: #{token}")

    %{"id" => id} =
      case Gather.Signer.validate(token) do
        {:ok, %{"id" => _id} = claims} -> claims
        _ -> %{"id" => ""}
      end

    if id != "" do
      assign(conn, :id, id)
    else
      conn
      |> put_resp_header("Content-Type", "application/json; charset=utf-8")
      |> send_resp(400, Jason.encode!(%{error: "Not signed in (Token: #{token})"}))
      |> halt()
    end
  end
end
