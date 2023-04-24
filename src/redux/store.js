import messageReducer from "./messageReducer"
import postsReducer from "./postsReducer"

const store = {
  state: {

    posts: {
      post: [{
        txtMessage: "this is post 1",
        likeCount: "23"
      },
      {
        txtMessage: "this is post 2",
        likeCount: "56",
      },
      ],
      inputMessage: ''
    },
  
    messages: {
      users: [
        {
          name: "user 1",
          id: "1",
          avatar: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
        },
        {
          name: "user 2",
          id: "2",
          avatar: "https://w7.pngwing.com/pngs/246/1013/png-transparent-painting-wall-mural-hand-drawn-aesthetic-avatar-love-watercolor-painting-furniture-thumbnail.png"
        },
        {
          name: "user 3",
          id: "3",
          avatar: "https://w7.pngwing.com/pngs/444/107/png-transparent-avatar-female-portrait-woman-avatars-xmas-giveaway-icon-thumbnail.png"
        },
        {
          name: "user 4",
          id: "4",
          avatar: "https://w7.pngwing.com/pngs/737/959/png-transparent-bart-simpson-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-moe-szyslak-bart-simpson-springfield-hand-fictional-character-thumbnail.png"
        },
        {
          name: "user 5",
          id: "5",
          avatar: "https://w7.pngwing.com/pngs/876/691/png-transparent-avatar-coffee-cup-zorro-avatars-xmas-giveaway-icon-thumbnail.png"
        },

      ],
      message: [
        { textMessage: "txt1", id: "1", likesCount: 0 },
        { textMessage: "txt2", id: "2", likesCount: 0 },
        { textMessage: "txt3", id: "3", likesCount: 0 },
        { textMessage: "txt4", id: "4", likesCount: 0 },
        { textMessage: "txt5", id: "5", likesCount: 0 },
      ],
      inputMessage: ""
    }
  },

  bll: {

    updatePage() { },

    dispath(action) {
      
      store.state.posts = postsReducer(store.state.posts, action)
      store.state.messages = messageReducer(store.state.messages, action)

      store.bll.updatePage(store)
    }

  },
}

export default store