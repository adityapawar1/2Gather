defmodule Gather.JWTToken do
  @expiration_hours 8
  use Joken.Config

  @impl true
  def token_config do
    default_claims(default_exp: 60 * 60 * @expiration_hours, iss: "2gather-auth", skip: [:aud])
  end
end
