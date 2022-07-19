const Bookmark = require ('../models/bookmarkSchema')

const home=  (req, res) => {
    Bookmark.find().exec((err, bookmarks) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, bookmarks: bookmarks });
    });
  }

  const detail=  async (req, res) => {
    let id = req.params.id;
  
   const bookmark=  await Bookmark.findById(id)
    res.status(200).send(
     bookmark
  )
  }

  const add = (req, res) => {
        const bookmark = new Bookmark(req.body);
        bookmark.save((err) => {
          if (err) return res.status(400).json({ success: false, err });
          return res.status(200).json({ success: true });
        });
      }

 

      const deleteBookmark= (req, res) => {
            Post.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
              if (error) {
                res.send(error);
              }
              return res.json(deletedItem);
            });
          }


  module.exports={home, add,detail,deleteBookmark}