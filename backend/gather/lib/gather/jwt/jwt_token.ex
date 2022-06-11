defmodule Gather.JWTToken do
  use Joken.Config

  @impl true
  def token_config do
    # Expires in 2 hours
    default_claims(default_exp: 60 * 60 * 2, iss: "2gather-auth", skip: [:aud])
  end
end
