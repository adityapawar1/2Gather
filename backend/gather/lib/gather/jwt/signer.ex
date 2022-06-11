defmodule Gather.Signer do
  @moduledoc """
    A module for singing JWT tokens for authentication between lambda and this server
  """
  def generate_token(id) do
    signer = Joken.Signer.create("HS256", Application.fetch_env!(:gather, :secret))
    Gather.JWTToken.generate_and_sign!(%{"id" => id, "iss" => "2gather-auth"}, signer)
  end

  def validate(token) do
    signer = Joken.Signer.create("HS256", Application.fetch_env!(:gather, :secret))
    Gather.JWTToken.verify_and_validate(token, signer)
  end
end
