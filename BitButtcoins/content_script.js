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
    if v.lower in ["bitcoin", "bitcoins"
	v = v.replace(/\bBitcoin\b/g, "Buttcoin");
	v = v.replace(/\bbitcoin\b/g, "buttcoin");
    v = v.replace(/\bLitecoin\b/g, "LiteButtcoin");
    v = v.replace(/\blitecoin\b/g, "liteButtcoin");
    v = v.replace(/\bPeercoin\b/g, "PeerButtcoin");
    v = v.replace(/\bpeercoin\b/g, "peerButtcoin");
	//v = v.replace(/\bthe Cloud\b/g, "my Butt");
	//v = v.replace(/\bthe cloud\b/g, "my butt");
	
	textNode.nodeValue = v;
}


