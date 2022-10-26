module.exports = class DocumentUtil {
  constructor(initialDocument) {
    this.document = initialDocument || document;
  }
  getTextFromId(id) {
    return this.document.getElementById(id)?.value || null;
  }
};
