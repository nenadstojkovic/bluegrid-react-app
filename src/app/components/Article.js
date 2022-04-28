// Vendor
import { useState, useEffect } from 'react';

// Services
import { WarningDialog } from '../services/WarningDialog';

// Components
import ArticleEdit from './ArticleEdit';
import ArticleView from './ArticleView';

// Shared components
import Button from '../shared/Button';

// Styles
import '../../assets/styles/pages.css';
import '../../assets/styles/shared.css';

export default function Article() {

  const [enableEdit, setEnableEdit] = useState(false);
  const [enableView, setEnableView] = useState(false);
  const [articles, setArticles] = useState([]);
  const [editItem, setEditItem] = useState({
    title: '',
    text: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setArticles([
        {
          title: 'Lorem ipsum',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula nibh. Nam rhoncus at arcu non varius. Ut lacinia laoreet urna blandit placerat. Vivamus venenatis tortor odio, ut tempus metus egestas et. Suspendisse sodales augue risus, quis consectetur nunc blandit sed. Proin at egestas velit. Aenean scelerisque lectus enim, id tincidunt risus volutpat sit amet. Curabitur scelerisque augue sed libero lacinia, nec pellentesque ligula convallis. Proin dapibus felis ut magna gravida, at scelerisque dolor vulputate. Etiam porta elit mi. Praesent varius mollis egestas. Integer porta, turpis id pellentesque finibus, neque nisl iaculis diam, nec volutpat massa mi eu ex. Nunc leo massa, imperdiet ut leo in, consequat eleifend metus. Cras convallis ex a lacinia malesuada. Pellentesque a diam eget massa accumsan convallis sit amet sed nisi.',
          date: new Date()
        },
        {
          title: 'Mauris massa nisl',
          text: 'Mauris massa nisl, sodales quis sapien ut, elementum rutrum ipsum. Sed mollis, turpis volutpat feugiat congue, metus mauris pharetra sem, ac tincidunt diam augue sed felis. Vivamus tempus turpis sed varius elementum. Donec vulputate nisi vel lectus faucibus, eu interdum quam tristique. Quisque convallis suscipit ante, non varius dolor vehicula sit amet. Fusce imperdiet dui vel sem pharetra imperdiet. Ut rutrum iaculis urna, a sollicitudin odio eleifend ut. Aenean placerat consectetur ante, id condimentum odio posuere eget. Donec lacus enim, consectetur semper feugiat vitae, efficitur in mauris. Pellentesque vulputate auctor nulla at dignissim. Aliquam id ullamcorper eros, eu ultricies urna. Sed lorem ante, mattis vitae tempus eget, accumsan feugiat nisi. Nam sollicitudin ligula nec facilisis mollis.',
          date: new Date()
        },
        {
          title: 'Sed eros nunc',
          text: 'Sed eros nunc, imperdiet eu condimentum ut, vehicula ut orci. Nulla ultrices diam vitae ante aliquam maximus. Sed maximus, nisl eget rhoncus fermentum, tortor nunc consequat nisl, eu efficitur neque mi id felis. Vestibulum nibh nunc, rhoncus id magna vitae, iaculis sagittis tellus. Maecenas sed sodales felis. Donec pellentesque ex malesuada, ultricies lectus ac, consequat mi. Phasellus nisl elit, ornare in magna et, mattis ultricies massa.',
          date: new Date()
        },
        {
          title: 'Pellentesque',
          text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus magna turpis, eget auctor massa elementum vitae. Ut sit amet facilisis elit, sed feugiat sapien. Donec sit amet lectus eu augue luctus iaculis. In facilisis, tortor ut tincidunt feugiat, augue ipsum egestas diam, ac aliquet tellus dui ac urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent luctus ipsum metus, quis pretium leo faucibus a. Ut ante quam, sodales ut velit vel, hendrerit euismod diam. Etiam tempus leo et venenatis tempus.',
          date: new Date()
        }
      ]);
    }, 3000);
  }, []);

  const itemEdit = (e) => {
    articles.filter((item, index) => {
      if (index === e) {
        setEditItem(item);
      }
    })
    setEnableEdit(true);
  }

  const itemDelete = (e) => {
    WarningDialog();
  }

  const handleView = (e) => {
    articles.filter((item, index) => {
      if (index === e) {
        setEditItem(item);
        setEnableView(true);
      }
    })
  }

  return (
    <div className='articles'>
      {
        articles.length > 0 && !enableView
        ? 
          enableEdit
            ? 
              <ArticleEdit key={1} title={editItem.title} text={editItem.text} setEnableEdit={setEnableEdit} setEditItem={setEditItem} setArticles={setArticles} articles={articles} />
            :
              articles.map((article, index) => {
                return (
                    <div className='article-wrapper' key={index}>
                      <div className='article-header'>
                        <Button buttonTitle='Edit article' buttonClass='edit' buttonClick={() => {itemEdit(index)}} />
                        <Button buttonTitle='Remove article' buttonClass='remove' buttonClick={() => {itemDelete(index)}} />
                      </div>
                      <div className='article-body' onClick={() => {handleView(index)}}>
                        <span className='short-text' >{article.text}</span>
                        <span>{article.date.toDateString() } {article.date.toLocaleTimeString() }</span>
                      </div>
                    </div>
                )
              })
        :
          articles.length > 0 && enableView
            ?
              <ArticleView title={editItem.title} text={editItem.text} setEnableView={setEnableView} />
            :
              <h1>No articles</h1>
      }
    </div>
  );
}