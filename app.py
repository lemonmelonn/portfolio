import streamlit as st
from PIL import Image

# --- Page config
st.set_page_config(page_title="Devan Asokan | Portfolio", layout="wide")

# --- Navbar / Title
st.markdown("""
    <style>
        .title {
            font-size:40px;
            font-weight:700;
            color:#2E86C1;
        }
        .subtitle {
            font-size:20px;
            color: #555;
        }
        .btn {
            display:inline-block;
            padding:10px 20px;
            margin:10px 5px;
            border-radius:8px;
            background-color:#2E86C1;
            color:white;
            text-decoration:none;
            font-weight:600;
        }
        .btn:hover {
            background-color:#1B4F72;
            color:white;
        }
    </style>
""", unsafe_allow_html=True)

# --- Top Section
col1, col2 = st.columns([1,3])

with col1:
    img = Image.open("assets/profile.jpeg")  # replace with your photo
    st.image(img, width=200)

with col2:
    st.markdown('<div class="title">Devan Asokan</div>', unsafe_allow_html=True)
    st.markdown('<div class="subtitle">Data Science Intern | Aspiring Data Scientist</div>', unsafe_allow_html=True)
    st.write("I’m a final-year student passionate about **Data Science, AI, and Analytics**. Currently interning at MoneyMatch in the Product & Data team, building ETL pipelines and data-driven solutions.")
    st.markdown("""
        <a class="btn" href="#projects">View Projects</a>
        <a class="btn" href="mailto:devan@example.com">Contact Me</a>
    """, unsafe_allow_html=True)

st.write("---")

# --- Footer
st.write("📬 Reach me at: **devan@example.com** | [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)")

st.markdown(
    "<div style='text-align: center;'>"
    "<a href='https://linkedin.com/in/rishirajsharma231'><img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' width='40'></a>"
    "&nbsp;&nbsp;&nbsp;&nbsp;"
    "<a href='https://github.com/Rishiraj01'><img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg' width='40'></a>"
    "&nbsp;&nbsp;&nbsp;&nbsp;"
    "<a href='mailto:rishirajsharma231@gmail.com'><img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png' width='40'></a>"
    "</div>",
    unsafe_allow_html=True,
)