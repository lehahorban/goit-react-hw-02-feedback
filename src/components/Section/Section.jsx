import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <div>
      <p className={style.section}>{title}</p>
      {children}
    </div>
  );
}

export default Section;
