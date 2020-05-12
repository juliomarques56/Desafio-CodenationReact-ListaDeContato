export default function orderBy (contacts, order) {
    
    return contacts.sort((a, b) => (a[order] > b[order]) ? 1 : (a[order] === b[order]) ? ((a.size > b.size) ? 1 : -1) : -1 )
  };
