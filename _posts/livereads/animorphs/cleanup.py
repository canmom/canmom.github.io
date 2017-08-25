from bs4 import BeautifulSoup

f = open('2017-08-24-book-1-the-invasion-part-2.html')
soup = BeautifulSoup(f, "html.parser")

def author(li):
    return li.contents[0].split(':')[0]

def wrap_group(group):
    first_li = group[0]
    wrapper = soup.new_tag("li")
    first_li.insert_before(wrapper)
    for group_li in group:
        group_li.extract()
        group_li.name = "p"
        wrapper.append(group_li)

for ul in soup.find_all('ul'):
    prev_li = None
    group = []
    for li in ul.find_all('li'):
        if prev_li is None or author(li) == author(prev_li):
            group.append(li)
        else:
            if len(group) > 1:
                wrap_group(group)
            group = [li]
        prev_li = li
            
out = open('2017-08-24-book-1-the-invasion-part-2-processed.html','w')
out.write(soup.prettify())
out.close()