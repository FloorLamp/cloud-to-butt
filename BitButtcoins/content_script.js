walk(document.body);

function walk(node)
{
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;
  v = v.replace(/Bitcoin/g, "Buttcoin");
  v = v.replace(/bitcoin/g, "buttcoin");
  v = v.replace(/BTC/g, "BUTT");
  v = v.replace(/btc/g, "butt");
  v = v.replace(/Litecoin/g, "LiteButtcoin");
  v = v.replace(/litecoin/g, "liteButtcoin");
  v = v.replace(/Dogecoin/g, "DogeButtcoin");
  v = v.replace(/dogecoin/g, "dogeButtcoin");

  textNode.nodeValue = v;
}
