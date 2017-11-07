import Drop from "../components/Drop";
import ListEmpty from "../components/ListEmpty";
import List from "../components/List";

const Content = ({
  searchQuery,
  files = [],
  results = [],
  loading,
  onDrop,
}) => (
  <section className={loading ? "loading" : ""}>
    {searchQuery !== "" && results.length === 0 && <ListEmpty />}
    {searchQuery === "" && files.length === 0 && <Drop onDrop={onDrop} />}
    {files.length > 0 && <List results={files} />}
    {results.length > 0 && <List results={results} />}

    <style jsx>
      {`
        section {
          height: 100%;
          overflow: hidden;
        }

        .loading {
          opacity: 0.4;
          overflow-y: hidden;
          pointer-events: none;
        }
      `}
    </style>
  </section>
);

export default Content;
