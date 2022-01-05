import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // connect to a collection and retrieve the documents
      const res = await projectFirestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();
      // cycle through the documents and map them to a new array where
      // each item in the array represents a single post
      // contains the data from the document and the id as well
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
