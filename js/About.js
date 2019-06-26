class ExpandButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.team-card-bio[data-tab="${this.data}"]`
    );
    this.tabItem = new CardBio(this.itemElement);
    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    this.tabItem.select();
  }
}

class CardBio {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".team-card-bio");
    const active = this.element.classList.contains("active");

    Array.from(items).map(item => {
      item.classList.remove("active");
    });

    if (!active) {
      this.element.classList.add("active");
    }
  }
}

const expandButton = document
  .querySelectorAll(".expand-button")
  .forEach(expand => {
    return new ExpandButton(expand);
  });
