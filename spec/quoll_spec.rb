config = YAML.load_file('_config.yml')
baseurl = config.fetch('baseurl', '')
perma_ext = config.fetch('permalink', '') == 'pretty' ? '/' : '.html'

config['quoll'].each do |search|
  page = "#{baseurl}/#{search[1]['page']}#{perma_ext}".gsub(%r{\/+}, '/')
  terms = search[1]['terms']

  describe page, type: :feature, js: true do
    terms.each do |term|
      context "when searching the term '#{term}'" do
        before(:example) { visit(page) }
        let(:search_bar) { find(:css, '#search').set term }
        let(:result_link) { @result_link = first('.result').first('a')['href'] }
        it 'yields at least 1 result' do expect(@result_link) end
        it 'which sucessfully links to an existing page' do
          expect(have_text(term))
        end
      end
    end
  end
end
