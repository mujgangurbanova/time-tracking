const links = document.querySelectorAll(".person-schedule-items");

const fetchingData = async () => {
  const res = await fetch("../js/data.json");
  const newResponse = await res.json();
  handleUser(newResponse);
};

const handleUser = (activities) => {
  let cards = activities.map((el) => {
    return `
          <div class="activity-card">
            <div class="card">
              <div class="info active daily">            
                <div class="title">
                <p>${el.title}</p>
                <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                </div>
                <div class="description">
                  <h2>${el.timeframes.daily.current}hrs</h2>
                  <p>Yesterday - ${el.timeframes.daily.previous}hrs</p>
                </div>
              </div>

              <div class="info weekly">            
                <div class="title">
                <p>${el.title}</p>
                <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                </div>
                <div class="description">
                  <h2>${el.timeframes.weekly.current}hrs</h2>
                  <p>Last Week - ${el.timeframes.weekly.previous}hrs</p>
                </div>
              </div>

              <div class="info monthly">            
                <div class="title">
                <p>${el.title}</p>
                <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
                </div>
                <div class="description">
                  <h2>${el.timeframes.monthly.current}hrs</h2>
                  <p>Last Month - ${el.timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>
          </div>
    `;
  });
  const wrapper = document.querySelector(".activity");
  cards = cards.join("");
  wrapper.innerHTML = cards;
};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      links.forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");

      const informations = document.querySelectorAll(".info");

      informations.forEach((el) => {
        el.classList.remove("active");
      });
      const timeframes = document.getElementsByClassName(id);
      for (let i = 0; i < timeframes.length; i++) {
        let el = timeframes[i];
        el.classList.add("active");
      }
    }
  });
});

fetchingData();
