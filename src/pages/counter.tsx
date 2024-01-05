import { createResource, createSignal } from "solid-js";

export default function CharacterName() {
  const [name] = createResource(() =>
    fetch('https://swapi.dev/api/people/1')
      .then((result) => result.json())
      .then((data) => data.name)
  )
  const [count, setCount] = createSignal(10);

  return (
    <>
      <h2 b-yellow b-1 c-green>Name:</h2>
      {/* Luke Skywalker */}
      <div>{name()}</div>
      <div>{count()}</div>
      <button class="btn btn-primary" onClick={() => setCount(count() + 1)}>Clicked: {count()}</button>
      <div class="dropdown">
        <label tabindex="0" class="btn m-1">Clickable Menu</label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="badge badge-secondary">secondary</div>
    </>
  );
}