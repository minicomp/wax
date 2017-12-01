$search_tests.each do |search|
  search_page = search[1]['page']
  terms = search[1]['terms']

  describe search_page, :type => :feature, :js => true do
    before(:all) do
      visit($baseurl + "/" + search_page)
      @search_bar = find(:css, "#search")
    end
    it "has a search bar." do
      expect(@search_bar)
    end
    terms.each do |term|
      context "when searching the term \"" + term + "\"" do
        before(:all) do
          @search_bar.set term
          @result_link = first(".result").first("a")['href']
        end
        after(:all) do
          visit($baseurl + "/" + search_page)
        end
        it "yields at least 1 result" do
          expect(@result_link)
        end
        it "which sucessfully links to an existing page" do
          visit(@result_link)
          expect(status_code == 200)
        end
        it "which totally includes " + term + "\"" do
          expect(have_text(term))
        end
      end
    end
  end
end
