import './App.css';

function App() {
  return (
    <div>
      <link src="stylesheet" href="App.css" />
      <div className="header">
          <nav>
              <h1>FOGG</h1>
              <ul>
                  <li>Home |</li>
                  <li>Products |</li>
                  <li>About Us |</li>
                  <li>Contact Us</li>
              </ul>
          </nav>
      </div>
      <div className="searchbar">
          <input placeholder="search" />
      </div>
      <div className="product">
          <div className="box">
              <img src="https://source.unsplash.com/220x220/?perfume?1" alt="product 1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati asperiores dolorum tenetur modi unde quidem nihil iure impedit facere.</p>
          </div>
          <div className="box">
              <img src="https://source.unsplash.com/220x220/?perfume?2" alt="product 2" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati asperiores dolorum tenetur modi unde quidem nihil iure impedit facere.</p>
          </div>
          <div className="box">
              <img src="https://source.unsplash.com/220x220/?perfume?3" alt="product 3" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, obcaecati asperiores dolorum tenetur modi unde quidem nihil iure impedit facere.</p>
          </div>
      </div>
      <div className="about">
          <h1>About Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio suscipit officiis eaque minus doloribus sunt consectetur facilis, ducimus debitis recusandae esse porro eum numquam eius, illum quidem at quasi sit dolores fuga expedita aliquam nihil cum. Ipsum amet atque, animi, dolorem exercitationem, sint delectus nisi officia laboriosam consectetur cumque odit blanditiis quae eum? Eum et pariatur id magnam! Reprehenderit, ex. Numquam, praesentium commodi eveniet voluptate iste ipsum magni odit aspernatur. Repudiandae nam eos accusamus praesentium dignissimos fuga sunt pariatur? Consequatur numquam porro ducimus aut aperiam, molestiae adipisci excepturi non architecto at molestias eos perferendis modi similique nam soluta! Doloremque iste provident soluta reiciendis sed esse temporibus. Consequuntur labore officiis recusandae officia impedit enim, obcaecati, id explicabo, ipsa harum placeat sed pariatur blanditiis? Accusamus facere saepe consequatur corrupti accusantium odio voluptatibus assumenda itaque officiis obcaecati animi ex soluta qui veritatis earum atque rerum officia ut placeat, dicta natus! Assumenda aliquid placeat optio animi quos, nesciunt perspiciatis deserunt dolorum voluptate alias eligendi illum cum quod distinctio in. Doloribus, autem voluptate! Officiis ea tempore nesciunt eum harum at ab natus reprehenderit maxime perferendis. Quod deleniti quaerat sint omnis iste eligendi, esse autem est distinctio, sunt, rem dolorum odio quidem fugiat saepe reprehenderit.</p>
      </div>
      <div className="contact">
          <h4>Contact</h4>
          <p>+91 787575849</p>
          <p>ghdshdj@gmail.com</p>
          <p style={{marginTop: "30px", fontSize: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium est esse nam? Provident quae, odio non voluptas numquam earum quia et laboriosam asperiores, rerum magnam ut, optio aperiam saepe consectetur illum ex vel sit. Molestiae repellat veniam a eos possimus iusto delectus aut ipsum, pariatur labore cupiditate expedita dicta incidunt quod inventore esse mollitia placeat assumenda? Sed molestiae non, architecto voluptas mollitia, tempora maiores accusantium totam vero rem sapiente perferendis eveniet laborum! Beatae obcaecati nesciunt quia quas cum reprehenderit ipsam odit sapiente explicabo molestiae? Possimus suscipit veniam dolore perferendis minus, molestiae nobis, mollitia delectus nostrum ea, omnis numquam fuga.</p>
      </div>
    </div>
  );
}

export default App;
