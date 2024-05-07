select p.name, p2.name
from products p, providers p2
where p.id_categories = 6
and p2.id = p.id_providers