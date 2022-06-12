defmodule Gather.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :description, :string
    field :location, :map
    field :organizer, :integer
    field :participants, {:array, :integer}
    field :time, :map
    field :title, :string
    field :tags, {:array, :string}
    field :chat, {:array, :map}

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:title, :location, :organizer, :description, :time, :participants, :tags])
    |> validate_required([:title, :location, :organizer, :description, :time, :participants, :tags])
  end

  defimpl Jason.Encoder, for: __MODULE__ do
    @spec encode(%Gather.Event{}, Jason.Encode.opts()) ::
            binary
            | maybe_improper_list(
                binary | maybe_improper_list(any, binary | []) | byte,
                binary | []
              )
    def encode(%Gather.Event{} = value, opts) do
      Jason.Encode.map(Map.take(value, [:title, :location, :organizer, :description, :time, :participants, :tags]), opts)
    end
  end
end

defmodule Gather.Event.Time do
  @enforce_keys [:start, :end]
  defstruct [:start, :end]
  use ExConstructor

  defimpl Jason.Encoder, for: __MODULE__ do
    @spec encode(%Gather.Event.Time{}, Jason.Encode.opts()) ::
            binary
            | maybe_improper_list(
                binary | maybe_improper_list(any, binary | []) | byte,
                binary | []
              )
    def encode(%Gather.Event.Time{} = value, opts) do
      Jason.Encode.map(Map.take(value, [:start, :end]), opts)
    end
  end
end

defmodule Gather.Event.Location do
  @enforce_keys [:lat, :lng]
  defstruct [:lat, :lng, :address]
  use ExConstructor

  defimpl Jason.Encoder, for: __MODULE__ do
    @spec encode(%Gather.Event.Location{}, Jason.Encode.opts()) ::
            binary
            | maybe_improper_list(
                binary | maybe_improper_list(any, binary | []) | byte,
                binary | []
              )
    def encode(%Gather.Event.Location{} = value, opts) do
      Jason.Encode.map(Map.take(value, [:lat, :lng, :address]), opts)
    end
  end
end


defmodule Gather.Event.ChatMessage do
  @enforce_keys [:sender, :message]
  defstruct [:sender, :message]
  use ExConstructor

  defimpl Jason.Encoder, for: __MODULE__ do
    @spec encode(%Gather.Event.ChatMessage{}, Jason.Encode.opts()) ::
            binary
            | maybe_improper_list(
                binary | maybe_improper_list(any, binary | []) | byte,
                binary | []
              )
    def encode(%Gather.Event.ChatMessage{} = value, opts) do
      Jason.Encode.map(Map.take(value, [:sender, :message]), opts)
    end
  end
end
