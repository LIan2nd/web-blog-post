import e from 'express';
import bodyparser from 'body-parser';

const app = e();
const port = 3000;

app.use(e.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let posts = [
  {
    id: 1,
    author: "Sample",
    title: "Sample Title",
    slug: "sample-title",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis accusamus, praesentium repellat nulla ipsum natus enim commodi autem, pariatur quos officia? Dolorum quidem officia amet natus provident asperiores, consequuntur cupiditate incidunt quos autem ullam ipsam animi soluta? Totam, a natus quam optio architecto eaque dolorum. Asperiores possimus odit voluptate qui temporibus eos, odio minus veniam minima officia ut earum deserunt dicta quae soluta ullam totam eveniet, quam tempore, et voluptatibus hic nulla. Doloremque quae quis explicabo quas, pariatur sapiente voluptatibus fuga at beatae tenetur enim ipsa provident nesciunt fugit reprehenderit illum ut eligendi perspiciatis sed distinctio ducimus laudantium debitis consectetur! Officia quidem reiciendis voluptatum, velit rerum totam eveniet, exercitationem hic fugiat dolorum ex maiores nemo esse beatae minima aperiam unde eius porro illo doloribus ad temporibus et aliquam voluptatem! Nesciunt commodi assumenda aspernatur ullam dicta, harum blanditiis asperiores et accusamus tempore eos dolorem dolor vero dolorum. Tenetur, esse voluptatibus. Impedit, quisquam fugit! Deleniti et molestiae fuga, fugit quia voluptatibus temporibus dolores modi animi! Dolor cupiditate aliquid laboriosam quas facere accusantium. Nemo enim sapiente soluta suscipit cum quasi asperiores omnis repellendus dolorem. Quasi doloremque natus aut obcaecati totam minima dolore nesciunt perspiciatis? Eum numquam, eveniet similique, sit quae consectetur accusamus quas culpa quasi suscipit labore cumque praesentium delectus sint. Inventore culpa expedita dignissimos quo blanditiis aspernatur illum quam, nam asperiores quaerat qui saepe modi laboriosam similique nostrum excepturi, voluptate voluptatem laborum error adipisci eveniet. Eum possimus perferendis labore nobis similique aspernatur. Iste repellat quo dolorem qui! Atque nobis quo consectetur fuga natus quibusdam impedit quis veniam quidem sapiente quisquam perferendis asperiores esse dolorum velit debitis quod, dicta architecto explicabo! In nihil eum, eos perspiciatis mollitia vero itaque ad ratione porro nisi ex suscipit accusamus quia excepturi labore corporis qui illum! Voluptatum rerum odit eos officiis fugit expedita temporibus illum delectus iusto, beatae impedit amet quaerat! Illum officiis quas quod ducimus sunt, eveniet nihil praesentium reprehenderit voluptatibus porro rem, molestias eligendi harum voluptatum tempore obcaecati commodi eaque tenetur eos amet ipsam unde voluptates optio culpa! Ratione tenetur sunt corporis beatae sed dolores, atque soluta omnis enim numquam adipisci laudantium quis voluptate magnam praesentium modi, accusantium eaque obcaecati tempora amet natus expedita odio tempore quasi? Vel incidunt at consectetur accusamus, dolores labore vero illum aut ut laudantium quas ea fuga dignissimos ducimus nam quaerat quis iure, sint voluptas est soluta libero minus adipisci? Ipsa, mollitia libero similique nobis eos vero laudantium sequi nam, dicta cupiditate magnam expedita! Officia corrupti placeat facere numquam eum quo voluptates non. In quis provident eius quam suscipit quia, quidem animi laudantium est voluptatum error nesciunt, dolores incidunt non ducimus omnis obcaecati alias voluptas voluptatibus, similique molestias ipsam! Nihil explicabo culpa corrupti sit tempore. Consequatur quo modi ducimus aut nostrum temporibus beatae eum quidem eligendi autem sunt exercitationem, eos quisquam ipsum veniam sequi voluptates quod laborum eaque asperiores reiciendis cupiditate! Fuga aut hic non sit alias tenetur nisi dolorum deleniti et illum quia, laborum obcaecati ut dolor quos, excepturi sunt! Architecto accusantium repellat harum in atque aliquid quasi natus.",
    date: `${month[new Date().getMonth()]} ${new Date().getFullYear()}`
  },
  {
    id: 2,
    author: "Sample2",
    title: "Sample Title 2",
    slug: "sample-title-2",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis accusamus, praesentium repellat nulla ipsum natus enim commodi autem, pariatur quos officia? Dolorum quidem officia amet natus provident asperiores, consequuntur cupiditate incidunt quos autem ullam ipsam animi soluta? Totam, a natus quam optio architecto eaque dolorum. Asperiores possimus odit voluptate qui temporibus eos, odio minus veniam minima officia ut earum deserunt dicta quae soluta ullam totam eveniet, quam tempore, et voluptatibus hic nulla. Doloremque quae quis explicabo quas, pariatur sapiente voluptatibus fuga at beatae tenetur enim ipsa provident nesciunt fugit reprehenderit illum ut eligendi perspiciatis sed distinctio ducimus laudantium debitis consectetur! Officia quidem reiciendis voluptatum, velit rerum totam eveniet, exercitationem hic fugiat dolorum ex maiores nemo esse beatae minima aperiam unde eius porro illo doloribus ad temporibus et aliquam voluptatem! Nesciunt commodi assumenda aspernatur ullam dicta, harum blanditiis asperiores et accusamus tempore eos dolorem dolor vero dolorum. Tenetur, esse voluptatibus. Impedit, quisquam fugit! Deleniti et molestiae fuga, fugit quia voluptatibus temporibus dolores modi animi! Dolor cupiditate aliquid laboriosam quas facere accusantium. Nemo enim sapiente soluta suscipit cum quasi asperiores omnis repellendus dolorem. Quasi doloremque natus aut obcaecati totam minima dolore nesciunt perspiciatis? Eum numquam, eveniet similique, sit quae consectetur accusamus quas culpa quasi suscipit labore cumque praesentium delectus sint. Inventore culpa expedita dignissimos quo blanditiis aspernatur illum quam, nam asperiores quaerat qui saepe modi laboriosam similique nostrum excepturi, voluptate voluptatem laborum error adipisci eveniet. Eum possimus perferendis labore nobis similique aspernatur. Iste repellat quo dolorem qui! Atque nobis quo consectetur fuga natus quibusdam impedit quis veniam quidem sapiente quisquam perferendis asperiores esse dolorum velit debitis quod, dicta architecto explicabo! In nihil eum, eos perspiciatis mollitia vero itaque ad ratione porro nisi ex suscipit accusamus quia excepturi labore corporis qui illum! Voluptatum rerum odit eos officiis fugit expedita temporibus illum delectus iusto, beatae impedit amet quaerat! Illum officiis quas quod ducimus sunt, eveniet nihil praesentium reprehenderit voluptatibus porro rem, molestias eligendi harum voluptatum tempore obcaecati commodi eaque tenetur eos amet ipsam unde voluptates optio culpa! Ratione tenetur sunt corporis beatae sed dolores, atque soluta omnis enim numquam adipisci laudantium quis voluptate magnam praesentium modi, accusantium eaque obcaecati tempora amet natus expedita odio tempore quasi? Vel incidunt at consectetur accusamus, dolores labore vero illum aut ut laudantium quas ea fuga dignissimos ducimus nam quaerat quis iure, sint voluptas est soluta libero minus adipisci? Ipsa, mollitia libero similique nobis eos vero laudantium sequi nam, dicta cupiditate magnam expedita! Officia corrupti placeat facere numquam eum quo voluptates non. In quis provident eius quam suscipit quia, quidem animi laudantium est voluptatum error nesciunt, dolores incidunt non ducimus omnis obcaecati alias voluptas voluptatibus, similique molestias ipsam! Nihil explicabo culpa corrupti sit tempore. Consequatur quo modi ducimus aut nostrum temporibus beatae eum quidem eligendi autem sunt exercitationem, eos quisquam ipsum veniam sequi voluptates quod laborum eaque asperiores reiciendis cupiditate! Fuga aut hic non sit alias tenetur nisi dolorum deleniti et illum quia, laborum obcaecati ut dolor quos, excepturi sunt! Architecto accusantium repellat harum in atque aliquid quasi natus.",
    date: `${month[new Date().getMonth()]} ${new Date().getFullYear()}`
  }
];

function getNextId() {
  if (posts.length === 0) return 1; // Mulai dengan ID 1 jika array kosong
  const maxId = Math.max(...posts.map(post => post.id)); // Cari ID terbesar dalam array
  return maxId + 1;
};

function getIdBySlug(slug) {
  const post = posts.find(post => post.slug === slug);
  return post ? post.id : null; // Mengembalikan id atau null jika tidak ditemukan
}

app.get('/', (req, res) => {
  res.render('index.ejs', {
    posts: posts,
    hero: "These are all the posts you have made",
  });
});

app.get('/create', (req, res) => {
  res.render('create.ejs', {
    hero: "What are you thinking about?",
  });

});

app.post('/create', (req, res) => {

  const newId = getNextId();
  const newPost = {
    id: newId,
    author: req.body.author,
    title: req.body.title,
    slug: req.body.title.toLowerCase().split(' ').join('-'),
    body: req.body["body"],
    date: `${month[new Date().getMonth()]} ${new Date().getFullYear()}`
  }

  posts.push(newPost);
  res.redirect('/');
});

app.get('/:slug/edit', (req, res) => {
  const slug = req.params.slug;
  const postId = getIdBySlug(slug);
  const post = posts.find(post => post.id === postId);

  res.render('edit.ejs', {
    post,
    hero: "Change of Mind?",
  });
});

app.post('/update/:slug', (req, res) => {
  const slug = req.params.slug;
  const postId = getIdBySlug(slug);
  const post = posts.find(post => post.id === postId);

  posts[post.id - 1] = {
    ...post,
    author: req.body.author,
    title: req.body.title,
    body: req.body['body'],
    slug: req.body.title.toLowerCase().split(' ').join('-'),
  }

  console.log(posts[post.id - 1]);
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  posts = posts.filter(post => post.id !== postId);
  res.redirect('/');
});

app.get('/:slug', (req, res) => {
  const slug = req.params.slug;
  const postId = getIdBySlug(slug);
  const post = posts.find(post => post.id === postId);
  res.render('detail.ejs', {
    post,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
})