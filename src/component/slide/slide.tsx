import './style.css';

interface Props {
  id: number;
  style: any;
  content: any;
}

const Slide = ({ id, style, content }: Props) => {
  return (
    <div id={`slide-${id}`} className="slide true-center" style={style} >
      {content?.cover && <h1 style={{ fontFamily: 'monospace', fontSize: '50px' }}>{content.cover.text}</h1>}
      {content?.columns && (<div className="true-center" style={{ width: '75%', gap: '15px' }}>
        {content.columns.map((c: any) =>
          <div key={c.header}>
            <h1>{c.header}</h1>
            <p dangerouslySetInnerHTML={{ __html: c.text }} ></p>
          </div>
        )}
      </div>)}
    </div >
  );
}

export default Slide;
