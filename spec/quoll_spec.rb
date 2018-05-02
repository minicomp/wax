config = YAML.load_file('_config.yml')
baseurl = config['baseurl'].to_s
search_tests = config['quoll']
perma_ext = config['permalink'] == 'pretty' ? "/" : ".html"


search_tests.each do |search|
  page = (baseurl + "/" + search[1]['page'] + perma_ext).gsub(/(\/+)/, '/')
  terms = search[1]['terms']

  describe page, :type => :feature, :js => true do
    it "has a search bar." do
      visit(page)
      @search_bar = find(:css, "#search")
      expect(@search_bar)
    end
    terms.each do |term|
      context "when searching the term \"" + term + "\"" do
        after(:example) { visit(page) }
        let(:search_bar) { @search_bar.set term }
        let(:result_link) { @result_link = first(".result").first("a")['href'] }
        it "yields at least 1 result" do expect(@result_link) end
        it "which sucessfully links to an existing page" do
          visit(@result_link)
          expect(have_text(term))
        end
      end
    end
  end
end
