import mongoose from "mongoose";
const uri =
  "mongodb+srv://extrastuffs:extrastuffs@extrastuffs.dxn15no.mongodb.net/fullstack-training?retryWrites=true&w=majority&appName=extrastuffs";
const connection = mongoose.connect(uri);

export { connection };
