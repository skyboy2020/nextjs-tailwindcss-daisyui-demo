function demo1() {
  return (
    <div>
      <input type="text" placeholder="Type here" class="input"></input>
      <input
        type="text"
        placeholder="Type here"
        class="input input-success w-full max-w-xs"
      ></input>
      <button class="btn">Button</button>
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-accent">Button</button>
      <button class="btn btn-ghost">Button</button>
      <button class="btn btn-link">Button</button>

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default demo1
