const Blog = () => {
  return (
    <div className="mt-10 text-left bg-yellow-50 w-2/4 mx-auto">
      <h1 className="text-xl font-bold">1. What is Onewaydatabinding?</h1>
      <p className="mt-2 font-semibold">
        One-way means that the binding happens in one direction. In this case,
        changes <br /> in the data automatically update the UI, but changes in
        the UI do not automatically <br /> update the data. That’s why it is
        referred to as one-way data binding. <br /> React achieves one-way data
        binding by using state and props.
      </p>

      <h1 className="mt-7 text-xl font-bold">2. Whatis NPMinnode.js?</h1>
      <p className="mt-2 font-semibold">
        npm is the standard package manager for Node.js. <br /> <br /> In
        September 2022 over 2.1 million packages were reported being listed in{" "}
        <br /> the npm registry, making it the biggest single language code
        repository on <br /> Earth, and you can be sure there is a package for
        (almost!) everything. <br /> <br /> It started as a way to download and
        manage dependencies of Node.js <br /> packages, but it has since become
        a tool used also in frontend JavaScript.
      </p>

      <h1 className="mt-7 text-xl font-bold">3. Different between Mongodb database vs mySQL database.</h1>
      <p className="mt-2 font-semibold">
        <span className="text-xl font-bold underline">MySQL</span> <br /><br /> MySQL is a popular, free-to-use, and open-source relational
        database management system <br /> (RDBMS) developed by Oracle. As with other
        relational systems, MySQL stores data using tables <br /> and rows, enforces
        referential integrity, and uses structured query language (SQL) for data
        access. <br /> When users need to retrieve data from a MySQL database, they
        must construct an SQL query that <br /> joins multiple tables together to
        create the view on the data they require. <br /><br /> Database schemas and data
        models need to be defined ahead of time, and data must match this <br /> schema
        to be stored in the database. This rigid approach to storing data offers
        some degree of <br /> safety, but trades this for flexibility. If a new type or
        format of data needs to be stored in the <br /> database, schema migration must
        occur, which can become complex and expensive as the size of <br /> the
        database grows. <br /><br /> <span className="text-xl font-bold underline">MongoDB</span> <br /><br /> MongoDB is also free to use and open source;
        however, its design principles differ from traditional <br /> relational
        systems. Often styled as a non-relational (or NoSQL) system, MongoDB
        adopts a <br /> significantly different approach to storing data, representing
        information as a series of JSON-like <br /> documents (actually stored as
        binary JSON, or BSON), as opposed to the table and row format of <br />
        relational systems. <br /><br /> MongoDB documents consist of a series of key/value
        pairs of varying types, including arrays and <br /> nested documents; however,
        the primary difference is that the structure of the key/value pairs in a <br />
        given collection can vary from document to document. This more flexible
        approach is possible <br /> because documents are self-describing.
      </p>
    </div>
  );
};

export default Blog;
