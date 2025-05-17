import { useEffect, useState } from "react";
import { fetchBudgetArticles } from "../../../api/budgetApi";
import Banner from "../../common/Banner/banner";
import bannerImg from '../../../assets/images/blog.png';
import './blog.scss';

interface IArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}


const Blog = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetchBudgetArticles("budget OR finance OR saving money")
      .then((res) => {
        const mapped = res.data.articles.map((item: any) => ({
          title: item.title,
          description: item.description,
          url: item.url,
          urlToImage: item.urlToImage,
          publishedAt: item.publishedAt,
        }));
        setArticles(mapped);
      })
      .catch((err) => {
        console.error("Error fetching articles", err);
      });
  }, []);
  return (
    <>
      <Banner title='Blog' description="Discover insights, tips, and stories that inspire. Our blog brings you the latest updates and practical advice to manage your finances better. Learn from experts and real-life experiences. Stay informed, stay empowered." image={bannerImg}/>

      <div className="blogs-section container">
       {articles.map((article) => (
       <div
       key={`${article.publishedAt}-${article.title}`}
       className="blogs-section-card"
       >
       <img className="blogs-section-card-img" src={article.urlToImage} alt={article.title} />
       
       <p className="blogs-section-card-date">{new Date(article.publishedAt).toLocaleDateString('az-AZ')}</p>
       <h3 className="blogs-section-card-title">{article.title}</h3>
       <p className="blogs-section-card-desc">{article.description}</p>
       <a className="blogs-section-card-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
       ))}
      </div>
    </>
  )
}

export default Blog
