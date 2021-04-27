import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdateAdmin from '../../../components/crud/BlogUpdateAdmin';
import Link from 'next/link';
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../../components/image-editor"),
  { ssr: false }
);

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogUpdateAdmin />
                            <DynamicComponentWithNoSSR />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;