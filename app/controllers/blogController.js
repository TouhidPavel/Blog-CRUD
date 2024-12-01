// Create Blog
export const createBlog = async (req, res) => {
    res.status(201).json({
        status: "Success",
        message: "Blog Created Successfully"
    })
}

// Read Blog
export const readBlog = async (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Blog Read Successfully"
    })
}

// Update Blog
export const updateBlog = async (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Blog Updated Successfully"
    })
}

// Delete Blog
export const deleteBlog = async (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Blog Deleted Successfully"
    })
}