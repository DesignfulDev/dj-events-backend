const slugify = require("slugify");

module.exports = {
  async beforeCreate(event) {
    const { data } = await event.params;

    if (data.name) {
      data.slug = await slugify(data.name, { lower: true });
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};
