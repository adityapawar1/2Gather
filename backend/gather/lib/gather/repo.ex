defmodule Gather.Repo do
  use Ecto.Repo,
    otp_app: :gather,
    adapter: Ecto.Adapters.Postgres
end
