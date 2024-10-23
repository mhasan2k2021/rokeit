import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section_container">
      <div className="strategy_input">
        <h3 className="logo logo_footer">LOGO</h3>
        <form>
          <label>I Am Looking For:</label>
          <select id="dropdown" name="options">
            <option value="SEO Campaigns">SEO Campaigns</option>
            <option value="Online Advertising">Online Advertising</option>
            <option value="Social Media">Social Media</option>
            <option value="Web Development">Web Development</option>
          </select>
          <button>Get Strategy</button>
        </form>
      </div>
      <div className="footer_grid">
        <div className="footer_contact_section">
          <div className="seo_menu_container">
            <ul className="footer_menu_list">
              <li>SEO</li>
              <li>SEO Service</li>
              <li>SEO Audit</li>
              <li>Local SEO</li>
              <li>Mobile SEO</li>
              <li>E-Commerce SEO</li>
              <li>Video SEO (vSEO)</li>
              <li>WooCommerce SEO</li>
              <li>SEO Copywriting</li>
              <li>Link-Building</li>
              <li>Negative Content Removal</li>
              <li>Online Reputation Management</li>
            </ul>
          </div>
          <div className="digital_advertising">
            <ul className="footer_menu_list">
              <li>Digital Advertising</li>
              <li>Coc Coc Ads</li>
              <li>Google Display Network Ads</li>
              <li>Google Ads</li>
              <li>Google Shopping Ads</li>
              <li>Programmatic Advertising</li>
              <li>YouTube Ads</li>
              <li>Facebook Ads</li>
              <li>Instagram Ads</li>
              <li>Zalo Ads</li>
              <li>TikTok Ads</li>
              <li>LinkedIn Ads</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
