const Bookmark = require ('../models/bookmarkSchema')

const home=  (req, res) => {
    Bookmark.find().exec((err, bookmarks) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, bookmarks: bookmarks });
    });
  }
  module.exports={home}